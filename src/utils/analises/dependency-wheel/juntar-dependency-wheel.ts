import { DependencyWheel } from '@domain';

function compararNoData(o1: DependencyWheel, o2: DependencyWheel): boolean {
  return o1.from === o2.from && o1.to === o2.to; // || (o1.person1 === o2.person2 && o1.person2 === o2.person1);
}

function juntarDependencyWheel(
  wheels1: DependencyWheel[],
  wheels2: DependencyWheel[],
): DependencyWheel[] {
  const wheels = wheels1.map((wheel) => ({ ...wheel }));

  wheels2.forEach((wheel2) => {
    const foundWheel = wheels.find((_wheel1) =>
      compararNoData(_wheel1, wheel2),
    );
    if (foundWheel != null) {
      foundWheel.weight = foundWheel.weight + wheel2.weight;
    } else {
      wheels.push(wheel2);
    }
  });

  return wheels;
}

export default juntarDependencyWheel;
