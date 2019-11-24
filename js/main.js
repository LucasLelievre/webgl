/**
 * The fonction that starts it all
 */
function main() {
  // the canvas that will be drawn on
  const canvas = document.querySelector("#glCanvas");
  // Initialise GL context
  const gl = canvas.getContext("webgl");

  // Only continue if Webgl is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser maybe too old.");
    //TODO quelque chose pour les navigateurs trop vieux
    return;
  }

  // TODO put the shaders out of there
  // Vertex shader
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
  // Fragment shader
  const fsSource = `
  varying lowp vec4 vColor;
  
  void main() {
    //gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    gl_FragColor = vColor;
  }
  `;

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocation: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  // Calling the routine that builds all the objects
  const buffers = initBuffers(gl);
  // Create a game world
  gameWorld = new GameWorld();
  // Create the game's elements
  gameWorld.init();

  var lastTime = 0.0;
  function render(newTime) {
    newTime *= 0.001; //convert in seconds
    const deltaTime = newTime - lastTime
    lastTime = newTime;

    // Draw the scene
    drawScene(gl, programInfo, buffers, deltaTime);
    // Draw the game's elements
    //gameWorld.draw();

    // call a new frame
    requestAnimationFrame(render);
  }

  // Call a new frame
  requestAnimationFrame(render);
}

// GO
window.onload = main;
