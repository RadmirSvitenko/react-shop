import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const { handleThemeChange } = useContext(ThemeContext);

  return (
    <div className="switch-container">
      <form>
        <label className="switch">
          <input type="checkbox" onChange={handleThemeChange} />
          <span className="slider round"></span>
        </label>
      </form>
    </div>

    // <div className="switch-container">
    //   <button onClick={handleThemeChange}>Theme mode</button>
    // </div>
  );
};

export default SwitchTheme;
