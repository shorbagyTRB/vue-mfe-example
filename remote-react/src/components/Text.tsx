type Props = {
  text?: string;
};

function Text({ text = "Sample Text" }: Props) {
  return <p>{text}</p>;
}

export default Text;
