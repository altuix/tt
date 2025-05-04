import { WarningIcon } from "../icons/Warning";

export const HeavyComponent: React.FC = () => {
  return (
    <div className="HeavyComponent">
      <h2>
        <WarningIcon /> Super heavy component, do not touch️️️ <WarningIcon />
      </h2>
    </div>
  );
};
