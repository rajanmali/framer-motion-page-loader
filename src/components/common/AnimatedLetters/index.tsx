interface AnimatedLettersProps {
  title: String[];
}

const AnimatedLetters = ({ title }: AnimatedLettersProps) => {
  return (
    <span className="row-title">
      {[...title].map((letter) => (
        <span className="row-letter">{letter}</span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
