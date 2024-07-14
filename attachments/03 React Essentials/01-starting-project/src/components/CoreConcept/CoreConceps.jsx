import CoreConcept from "../CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../../data-with-examples";

export default function CoreConcepts() {
  return (
    <>
      <h2>Time to get started!</h2>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    </>
  );
}
