'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Button from '@/components/Button';
import Section, { SectionTitle } from '@/components/Section';
import templatesData from '@/data/templates.json';

const DemoPage = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template') || '1';
  const customize = searchParams.get('customize') === 'true';
  
  const [template, setTemplate] = useState(null);
  const [businessName, setBusinessName] = useState('Your Business');
  const [logo, setLogo] = useState('/images/logo.svg');
  const [viewMode, setViewMode] = useState('desktop');
  const [activeTab, setActiveTab] = useState('preview');
  
  const threeContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  
  // Load template data
  useEffect(() => {
    const selectedTemplate = templatesData.find(t => t.id.toString() === templateId) || templatesData[0];
    setTemplate(selectedTemplate);
  }, [templateId]);
  
  // Initialize Three.js scene
  useEffect(() => {
    if (!threeContainerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(threeContainerRef.current.clientWidth, threeContainerRef.current.clientHeight);
    threeContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;
    
    // Create a simple 3D website mockup
    const createWebsiteMockup = () => {
      // Create a laptop model
      const laptopGroup = new THREE.Group();
      
      // Laptop base
      const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
      const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      laptopGroup.add(base);
      
      // Laptop screen
      const screenBaseGeometry = new THREE.BoxGeometry(3, 2, 0.1);
      const screenBaseMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
      const screenBase = new THREE.Mesh(screenBaseGeometry, screenBaseMaterial);
      screenBase.position.y = 1.1;
      screenBase.position.z = -1;
      laptopGroup.add(screenBase);
      
      // Screen content (website)
      const screenGeometry = new THREE.PlaneGeometry(2.8, 1.8);
      const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.y = 1.1;
      screen.position.z = -0.95;
      laptopGroup.add(screen);
      
      // Add website elements (simplified)
      const headerGeometry = new THREE.PlaneGeometry(2.8, 0.3);
      const headerMaterial = new THREE.MeshBasicMaterial({ color: 0x6366f1 });
      const header = new THREE.Mesh(headerGeometry, headerMaterial);
      header.position.y = 1.85;
      header.position.z = -0.94;
      laptopGroup.add(header);
      
      // Add website content blocks
      const contentGeometry = new THREE.PlaneGeometry(2, 0.4);
      const contentMaterial = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });
      
      for (let i = 0; i < 3; i++) {
        const content = new THREE.Mesh(contentGeometry, contentMaterial);
        content.position.y = 1.3 - (i * 0.5);
        content.position.z = -0.94;
        laptopGroup.add(content);
      }
      
      scene.add(laptopGroup);
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
    };
    
    createWebsiteMockup();
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!threeContainerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(threeContainerRef.current.clientWidth, threeContainerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current && rendererRef.current.domElement && threeContainerRef.current) {
        threeContainerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (sceneRef.current) {
        // Dispose of all geometries and materials
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);
  
  // Handle file upload for logo
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <Section background="white" padding="lg">
        <SectionTitle 
          title="Website Demo" 
          subtitle={`Previewing the ${template.name} template`} 
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Sidebar - Customization Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Customize Your Website</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your business name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                      <Image 
                        src={logo} 
                        alt="Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    </div>
                    <label className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      Upload Logo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    View Mode
                  </label>
                  <div className="flex space-x-2">
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        viewMode === 'desktop'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setViewMode('desktop')}
                    >
                      Desktop
                    </button>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        viewMode === 'mobile'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setViewMode('mobile')}
                    >
                      Mobile
                    </button>
                    <button
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        viewMode === '3d'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setViewMode('3d')}
                    >
                      3D View
                    </button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <Button size="lg" className="w-full">
                    Generate Website
                  </Button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Your website will be available at<br />
                    <span className="font-mono text-indigo-600">{businessName.toLowerCase().replace(/\s+/g, '-')}.instantweb.ai</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b">
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === 'preview'
                      ? 'border-b-2 border-indigo-600 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('preview')}
                >
                  Preview
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === 'code'
                      ? 'border-b-2 border-indigo-600 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('code')}
                >
                  Code
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === 'settings'
                      ? 'border-b-2 border-indigo-600 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  Settings
                </button>
              </div>
              
              {/* Preview Content */}
              {activeTab === 'preview' && (
                <div>
                  {viewMode === '3d' ? (
                    <div 
                      ref={threeContainerRef} 
                      className="w-full h-[600px]"
                    ></div>
                  ) : (
                    <div className={`${viewMode === 'mobile' ? 'max-w-xs mx-auto' : 'w-full'}`}>
                      {/* Browser mockup */}
                      <div className="bg-gray-100 px-4 py-2 border-b flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="mx-auto bg-white rounded-full flex items-center px-3 py-1 text-xs text-gray-500">
                          {businessName.toLowerCase().replace(/\s+/g, '-')}.instantweb.ai
                        </div>
                      </div>
                      
                      {/* Website preview */}
                      <div className="relative">
                        <div className="aspect-[16/9] bg-gradient-to-b from-indigo-50 to-white"></div>
                        
                        {/* Website content mockup */}
                        <div className="absolute inset-0 p-4 flex flex-col">
                          <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-2">
                              <Image 
                                src={logo} 
                                alt="Logo" 
                                width={32} 
                                height={32} 
                                className="w-8 h-8 rounded-md"
                              />
                              <div className="font-bold text-gray-800">{businessName}</div>
                            </div>
                            <div className="flex space-x-4">
                              <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                              <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="flex-1 flex flex-col">
                            <div className="h-1/2 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-32 h-2 bg-gray-800 rounded-full mx-auto mb-2"></div>
                                <div className="w-48 h-2 bg-gray-800 rounded-full mx-auto mb-4"></div>
                                <div className="w-24 h-8 bg-indigo-600 rounded-md mx-auto"></div>
                              </div>
                            </div>
                            
                            <div className="h-1/2 grid grid-cols-3 gap-2">
                              <div className="bg-gray-100 rounded-md"></div>
                              <div className="bg-gray-100 rounded-md"></div>
                              <div className="bg-gray-100 rounded-md"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Code Tab */}
              {activeTab === 'code' && (
                <div className="p-4">
                  <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm overflow-auto h-[600px]">
                    <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${businessName}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="container">
      <div class="logo">
        <img src="logo.svg" alt="${businessName} Logo">
        <span>${businessName}</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Welcome to ${businessName}</h1>
        <p>Your trusted partner for quality services</p>
        <a href="#" class="button">Get Started</a>
      </div>
    </section>

    <!-- More sections would go here -->
  </main>

  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`}</pre>
                  </div>
                </div>
              )}
              
              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Website Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color Scheme
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {['#6366F1', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'].map((color) => (
                          <button
                            key={color}
                            className="w-8 h-8 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Font
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Inter</option>
                        <option>Roboto</option>
                        <option>Open Sans</option>
                        <option>Montserrat</option>
                        <option>Poppins</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Layout
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button className="border border-gray-200 rounded-md p-4 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          <div className="w-full h-20 bg-gray-100 mb-2 rounded"></div>
                          <div className="text-sm text-center">Standard</div>
                        </button>
                        <button className="border border-gray-200 rounded-md p-4 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          <div className="w-full h-20 bg-gray-100 mb-2 rounded flex">
                            <div className="w-1/3 border-r border-white"></div>
                            <div className="w-2/3"></div>
                          </div>
                          <div className="text-sm text-center">Sidebar</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DemoPage;
