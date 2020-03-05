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
  static add(out: Float32Array, input: Float32Array, add: Float32Array): void;
  static scale(out: Float32Array, input: Float32Array, scale: number): void;
  static normalize(out: Float32Array, input: Float32Array): void;
  static exactEquals(a: Float32Array, b: Float32Array): boolean;
}

declare class vec3 {
  static fromValues(x: number, y: number, z: number): Float32Array;
  static set(out: Float32Array, x: number, y: number, z: number): void;
  static add(out: Float32Array, vec3in: Float32Array, vec3add: Float32Array): void;
  static subtract(out: Float32Array, vec3in: Float32Array, vec3add: Float32Array): void;
  static rotateX(out: Float32Array, input: Float32Array, origin: Float32Array, rad: number): void;
  static rotateY(out: Float32Array, input: Float32Array, origin: Float32Array, rad: number): void;
}