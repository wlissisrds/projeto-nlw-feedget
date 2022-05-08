import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";

export function ScreenshotButton() {
  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.querySelector('html')!)
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="p-2 bg-zinc-800 text-zinc-100 rounded-md boder-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Camera className="w-6 h-6" />
    </button>
  );
}
