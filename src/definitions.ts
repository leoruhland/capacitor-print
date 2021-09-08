export interface PrintPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
