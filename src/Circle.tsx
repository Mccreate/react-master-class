import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor?: string;
}
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
    // useState<타입1 | 타입2>를 넣음으로써 두 가지 이상의 타입 사용가능.
    // react는 useState의 초기값을 통해 타입 추론.
    const [value, setValue] = useState<string | number>(0);
    return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}></Container>;
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name}. You're ${playerObj.age} years old.`;

sayHello({ name: "nico", age: 12 });
sayHello({ name: "hi", age: 16 });
