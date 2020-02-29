declare class mat4 {
  static create(): Float32List;
  static perspective(out: Float32List, fov: number, ratio: number, near: number, far: number): void;
  static identity(out: Float32List): void;
  static translate(out: Float32List, int: Float32List, pos: Float32Array): void;
  static scale(out: Float32List, int: Float32List, size: Float32Array): void;
  static rotate(out: Float32List, int: Float32List, angle: number, axis: Float32Array): void;
}

declare class vec2 {
  static fromValues(x: number, y: number): Float32Array;
  static set(out: Float32Array, x: number, y: number): void;
}

declare class vec3 {
  static fromValues(x: number, y: number, z: number): Float32Array;
}