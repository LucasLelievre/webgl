var squareRotation = 0.0;

function drawScene(gl, programInfo, buffers, deltaTime) {
  gl.canvas.width  = window.innerWidth;
  gl.canvas.height = window.innerHeight;

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            //

  // Clear the canvas before we start drawing on it
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is used to simulate the distortion of perspective in camera
  // Our field of view is 45 degrees, with a width/height ratio that matched the display of the canvas
  // And we only want to see objects between 0.1 units and 100 units away from the camera

  const fieldOfView = 45 * Math.PI / 180; // in radians
  //const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const aspect = window.innerWidth / window.innerHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatric.js always has the first argument as the destination to receive the result
  mat4.perspective(projectionMatrix,
    fieldOfView,
    aspect,
    zNear,
    zFar);

  // Set the drawing position to the "identity" point, which is the center of the scene
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to start drawing the square
  mat4.translate(modelViewMatrix,   // destination matrix
    modelViewMatrix,                // matrix to translate
    [-0.0, 0.0, -6.0]);             // actual translation (x, y, z)
  // Rotate the thing !
  mat4.rotate(modelViewMatrix,      // Destination matrix
    modelViewMatrix,                // matrix to rotate
    squareRotation,                 // amount to rotate in radians
    [0, 0, 1]);                     // axisof rotation
  mat4.rotate(modelViewMatrix,  // destination matrix
    modelViewMatrix,  // matrix to rotate
    squareRotation * .7,// amount to rotate in radians
    [0, 1, 0]);       // axis to rotate around (X)

  // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
  {
    const numComponents = 3;  // pull out 2 values per iteration
    const type = gl.FLOAT;    // the data in the buffer is 32bit floats
    const normalize = false;  // don't normalize
    const stride = 0;         // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0;         // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(
      programInfo.attribLocations.vertexPosition,
    );
  }

  // Tell WebGL how to pull out the colors from the color buffer into the vertexcolor attributer
  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexColor,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(
      programInfo.attribLocations.vertexColor
    );
  }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // Tell WebGL to use our program when drawing
  gl.useProgram(programInfo.program);

  // Set the shader uniforms
  gl.uniformMatrix4fv(
    programInfo.uniformLocation.projectionMatrix,
    false,
    projectionMatrix);
  gl.uniformMatrix4fv(
    programInfo.uniformLocation.modelViewMatrix,
    false,
    modelViewMatrix);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // update the rotation
  squareRotation += deltaTime;
}
