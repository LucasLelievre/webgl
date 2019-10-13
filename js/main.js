//
// Starts here
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialise GL context
  const gl = canvas.getContext("webgl");

  // Only continue if Webgl is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser is shit.");
    return;
  }

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


  var then = 0.0;

  function render(now) {
    now *= 0.001; //convert in seconds
    const deltaTime = now - then;
    then = now;

    // Draw the scene
    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);

  }

  requestAnimationFrame(render);

}

window.onload = main;
