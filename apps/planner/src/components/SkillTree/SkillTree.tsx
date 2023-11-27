import bg from "./assets/bg-single.webp?url";
import iceBolt from "./assets/ice-bolt.png?url";

export const SkillTree = () => {
  return (
    <div>
      <h2>skill tree</h2>
      <div
        style={{
          "background-image": `url(${bg})`,
          "background-size": "cover",
          "background-position": "center",
        }}
        class={`text-red-700 aspect-[1/1.29] relative`}
      >
        <div class="absolute top-[8%] left-1/3 hover:brightness-150 active:scale-90 transition-transform w-1/12 aspect-square">
          <img src={iceBolt} />
        </div>
      </div>
    </div>
  );
};
