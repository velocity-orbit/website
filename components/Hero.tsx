'use client';
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function Hero() {
  return (
    <div className="h-screen relative overflow-hidden rounded-3xl">
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          inset: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -10,
          backgroundColor: "#000000",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606ff&color2=%23fe8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="h-screen w-full relative">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Taking Civilization Beyond Earth
          </h1>
          <h3 className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Building high-performance rocket engines and space transportation
            systems for LEO, GEO & Lunar missions.
          </h3>
        </div>
      </div>
    </div>
  );
}
