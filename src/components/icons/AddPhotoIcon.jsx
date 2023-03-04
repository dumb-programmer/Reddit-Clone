const AddPhotoIcon = ({ height, width, stroke }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
    >
      <path
        d="M21 11V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H6.5C7.12951 7 7.72229 6.70361 8.1 6.2L9.15 4.8C9.52771 4.29639 10.1205 4 10.75 4H13.25"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 4V6.5M18.5 9V6.5M18.5 6.5H16M18.5 6.5H21"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="13"
        r="4"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddPhotoIcon;
