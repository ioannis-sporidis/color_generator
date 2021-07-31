import SingleColor from './SingleColor';

const ColorList = props => {
  return (
    <section className='colors'>
      {props.list.map((color, index) => {
        return (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        );
      })}
    </section>
  );
};

export default ColorList;
