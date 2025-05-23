{#if isVisible}
<canvas bind:this={canvas}></canvas>
{/if}

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let isVisible = true;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  const FONT_SIZE = 16;
  const GREEN_COLOR = '#00FF00'; // Green color for the matrix rain

  interface Column {
    x: number;
    y: number;
    text: string;
  }

  let columns: Column[] = [];
  let animationFrameId: number | undefined = undefined;
  let lastUpdateTime = 0;
  const animationSpeed = 75; // Milliseconds - Increase for slower rain, decrease for faster. Default was effectively ~16ms (60fps)

  let resizeHandler: (() => void) | undefined = undefined;

  const startRain = () => {
    if (!canvas || !isVisible) return;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setup = () => {
      if (!canvas || !ctx || !isVisible) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const numColumns = Math.floor(canvas.width / FONT_SIZE);
      columns = [];
      for (let i = 0; i < numColumns; i++) {
        columns.push({
          x: i * FONT_SIZE,
          y: Math.random() * canvas.height, // Start at a random y position
          text: getRandomChar(),
        });
      }
    };

    const getRandomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      // Add some Katakana characters for the matrix effect
      const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
      const allChars = chars + katakana;
      return allChars.charAt(Math.floor(Math.random() * allChars.length));
    };

    const draw = (currentTime: number) => {
      if (!ctx || !canvas || !isVisible) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = undefined;
        }
        return;
      }

      animationFrameId = requestAnimationFrame(draw); // Request next frame

      const deltaTime = currentTime - lastUpdateTime;

      if (deltaTime < animationSpeed) {
        return; // Skip this frame if not enough time has passed
      }

      lastUpdateTime = currentTime - (deltaTime % animationSpeed);

      // Semi-transparent black background to create the fading trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = GREEN_COLOR;
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        ctx.fillText(col.text, col.x, col.y);

        // Move the character down
        col.y += FONT_SIZE;

        // Reset to top if it goes off screen, with a random chance
        if (col.y > canvas.height && Math.random() > 0.975) {
          col.y = 0;
        }
        // Update the character
        col.text = getRandomChar();
      }
    };

    setup();
    animationFrameId = requestAnimationFrame(draw); // Initial call to draw

    resizeHandler = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      setup();
      if (isVisible) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener('resize', resizeHandler);
  };

  const stopRain = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = undefined;
    }
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler);
      resizeHandler = undefined;
    }
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas when stopping
    }
  };

  onMount(() => {
    if (isVisible) {
      startRain();
    }
    return () => {
      stopRain();
    };
  });

  $: {
    if (canvas) { // Ensure canvas is mounted
      if (isVisible && !animationFrameId) {
        startRain();
      } else if (!isVisible && animationFrameId) {
        stopRain();
      }
    }
  }
</script>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure it's behind other content */
    display: block; /* Remove extra space below canvas */
  }
</style>
