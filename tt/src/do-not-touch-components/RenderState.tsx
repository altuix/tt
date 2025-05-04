export const RenderState: React.FC<{ state: unknown }> = ({ state }) => {
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
