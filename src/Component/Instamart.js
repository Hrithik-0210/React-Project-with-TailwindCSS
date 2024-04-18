import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, key }) => {
  return (
    <div className="border border-gray-200 m-2 p-2 rounded-lg">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-medium">{title}</h2>
        {console.log(`key is ${key}`)}
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className="w-fit  p-1 rounded-md"
          >
            <i class="fa-solid fa-chevron-up"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
            className="w-fit p-1 rounded-md"
          >
            <i class="fa-solid fa-chevron-down "></i>
          </button>
        )}
      </div>
      {isVisible && <p className="text-base font-normal">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState();
  console.log(visibleSection);
  return (
    <div>
      <h1 id="" className="text-3xl font-medium m-2">
        Instamart page
      </h1>
      <Section
        id="1"
        title={"About Instamart"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
        }
        isVisible={visibleSection === true}
        setIsVisible={(e) => setVisibleSection(e)}
        key={"1"}
      />
      <Section
        title={"Members "}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
        }
        isVisible={visibleSection === false}
        setIsVisible={(e) => setVisibleSection(e)}
        key={2}
      />
      <Section
        title={"Careers"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
        }
        isVisible={visibleSection === false}
        setIsVisible={(e) => setVisibleSection(e)}
        key={3}
      />
    </div>
  );
};

export default Instamart;
