/** Entry File */
import * as fs from "node:fs";
import * as path from "node:path";
import { Vector } from "./tuple";

const generate_color = (vector: Vector) => {
  const r = vector.x;
  const g = vector.y;
  const b = vector.z;

  const rbyte = parseInt((255.999 * r).toFixed(2));
  const gbyte = parseInt((255.999 * g).toFixed(2));
  const bbyte = parseInt((255.999 * b).toFixed(2));

  return `${rbyte} ${gbyte} ${bbyte}\n`;
};

const write_color = (output_path: string, color: string) => {
  fs.writeFileSync(output_path, color, { flag: "a+" });
};

const init = (image_width: number, image_height: number, path: string) => {
  write_color(path, `P3\n${image_width} ${image_height}\n255\n`);

  for (let j = 0; j < image_height; j++) {
    for (let i = 0; i < image_width; i++) {
      const vector = new Vector(
        i / (image_width - 1),
        j / (image_height - 1),
        0.0,
      );

      write_color(path, generate_color(vector));
    }
  }
};

const image_height = 256;
const image_width = 256;
const output_file = path.join("./output/test.ppm");

init(image_height, image_width, output_file);
