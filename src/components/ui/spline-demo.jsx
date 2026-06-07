import { SplineScene } from './spline-scene';
import { Card } from './card';
import { Spotlight } from './spotlight';

/**
 * SplineSceneBasic — drop-in demo card showing an interactive 3D scene
 * beside a text block, with a soft spotlight hover effect.
 *
 * Usage:
 *   import { SplineSceneBasic } from '@/components/ui/spline-demo';
 *   <SplineSceneBasic />
 */
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10">
      <Spotlight size={300} />

      <div className="flex h-full">
        {/* ── Left: text content ── */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h2>
          <p className="mt-4 text-neutral-300 max-w-lg leading-relaxed text-sm md:text-base">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
        </div>

        {/* ── Right: 3D scene ── */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
