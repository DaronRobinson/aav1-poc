// Interface automatically generated by schemas-to-ts

export enum Type {
  Primary = 'primary',
  Secondary = 'secondary',}

export interface Button {
  text?: string;
  type?: Type;
}
export interface Button_Plain {
  text?: string;
  type?: Type;
}

export interface Button_NoRelations {
  text?: string;
  type?: Type;
}
