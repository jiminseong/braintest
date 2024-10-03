import styled from 'styled-components';

const TypeTitle = ({ type, name }: { type: number; name: string }) => {
    let title;
    let typeTtileVersion = `${type}`;
    if (type <= 9) {
        typeTtileVersion = `0${type}`;
    }

    switch (type) {
        case 1:
            title = '뇌의 기능이 전체적으로 균등하게 활동하는';
            break;
        case 2:
            title = '도파민의 영향을 많이 받는';
            break;
        default:
            title = '123';
            break;
    }

    return (
        <Title>
            {name}님은 {title}
            <br />
            {typeTtileVersion}유형입니다.
        </Title>
    );
};

export default TypeTitle;

const Title = styled.div`
    color: #fff;
    text-align: center;
    font-family: SUIT;
    font-size: 4.375em;
    font-style: normal;
    font-weight: 600;
`;
