import React from 'react';
import Hello from "../components/Hello";
import { withKnobs, text, boolean,number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
    component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
    decorators: [withKnobs] // 애드온 적용
};

export const hello = () => {
    // knobs 만들기(라벨:화면에 보일 글자,임시값)
    const big = boolean('bold',false);
    const name = text('name', 'Storybook');
    const num = number("number",0);
    return (
        <Hello
            name={name}
            big={big}
            num={num}
            onHello={action('onHello')}
            onBye={action('onBye')}
        />
    );
};
// knobs 적용 되는 부분 만든곳
hello.story = {
    name: 'example',

};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;