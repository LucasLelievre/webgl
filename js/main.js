/**
 * The fonction that starts it all
 */
function main() {
  // the canvas that will be drawn on
  const canvas = document.querySelector("#glCanvas");
  // Initialise GL context
  const glContext = canvas.getContext("webgl");

  // Only continue if Webgl is available and working
  if (!glContext) {
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

  const shaderProgram = initShaderProgram(glContext, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: glContext.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: glContext.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocation: {
      projectionMatrix: glContext.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: glContext.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  // Calling the routine that builds all the objects
  const buffers = initBuffers(glContext);
  // Create a game world
  gameWorld = new GameWorld();
  // Create the game's elements
  gameWorld.init();

  var lastTime = 0.0;
  function update(newTime) {
    newTime *= 0.001; //convert in seconds
    const deltaTime = newTime - lastTime
    lastTime = newTime;

    // Draw the scene
    //drawScene(glContext, programInfo, buffers, deltaTime);
    // Draw the game's elements
    gameWorld.render(glContext, buffers, programInfo, deltaTime);

    // call a new frame
    requestAnimationFrame(update);
  }

  // Call a new frame
  requestAnimationFrame(update);
}

// GO
window.onload = main;
