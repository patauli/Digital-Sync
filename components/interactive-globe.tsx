"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Html, Environment } from "@react-three/drei"
import { TextureLoader } from "three"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Users, MapPin, Globe } from "lucide-react"
// import EarthGlobe from "lucide-react/dist/icons/Globe"

// Globe component
function EarthGlobeComponent({ onRegionClick }: { onRegionClick: (region: any) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Load earth texture
  const earthTexture = useLoader(TextureLoader, "/assets/3d/texture_earth.jpg")

  // Rotate the globe
  useFrame((state, delta) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += delta * 0.1
    }
  })

  // Sample regions data
  const regions = [
    {
      name: "North America",
      position: [-2, 1, 1],
      clients: 45,
      projects: 120,
      description: "Leading digital transformation across US and Canada",
    },
    {
      name: "Europe",
      position: [0.5, 1.2, 1],
      clients: 38,
      projects: 95,
      description: "Expanding digital presence across European markets",
    },
    {
      name: "Asia Pacific",
      position: [2, 0.5, 1],
      clients: 67,
      projects: 180,
      description: "Driving growth in India, Southeast Asia, and Australia",
    },
    {
      name: "Middle East",
      position: [1, 0.8, 1],
      clients: 22,
      projects: 58,
      description: "Supporting digital innovation in UAE and Saudi Arabia",
    },
  ]

  return (
    <group>
      {/* Earth Sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Region Markers */}
      {regions.map((region, index) => (
        <mesh
          key={index}
          position={region.position}
          onClick={() => onRegionClick(region)}
          onPointerOver={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            document.body.style.cursor = "auto"
          }}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
          <Html distanceFactor={10}>
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium pointer-events-none">
              {region.name}
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  )
}

// Loading component
function GlobeLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Loading Interactive Globe...</p>
      </div>
    </div>
  )
}

// Region info modal
function RegionInfo({ region, onClose }: { region: any; onClose: () => void }) {
  if (!region) return null

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {region.name}
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{region.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">{region.clients}</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div className="text-center p-3 bg-accent/10 rounded-lg">
              <div className="text-2xl font-bold text-accent">{region.projects}</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
          <Button className="w-full" onClick={onClose}>
            Explore Our Work in {region.name}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export function InteractiveGlobe() {
  const [selectedRegion, setSelectedRegion] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-primary">Global</span> Reach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how BicriSales is helping businesses worldwide achieve digital success. Click on any region to
              learn more about our impact.
            </p>
          </div>
          <div className="h-[600px] bg-background rounded-2xl shadow-lg flex items-center justify-center">
            <GlobeLoader />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="h-4 w-4" />
            Global Digital Solutions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-primary">Global</span> Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how BicriSales is helping businesses worldwide achieve digital success. Click on any region to
            learn more about our impact.
          </p>
        </div>

        <div className="relative h-[600px] bg-background rounded-2xl shadow-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <EarthGlobeComponent onRegionClick={setSelectedRegion} />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                minDistance={3}
                maxDistance={8}
                autoRotate={false}
              />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>

          {/* Instructions */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Drag to rotate • Scroll to zoom • Click markers for details</span>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">172</div>
                <div className="text-xs text-muted-foreground">Total Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">453</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-xs text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Region Info Modal */}
        {selectedRegion && <RegionInfo region={selectedRegion} onClose={() => setSelectedRegion(null)} />}
      </div>
    </section>
  )
}
