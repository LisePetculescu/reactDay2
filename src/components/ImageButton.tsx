type ImagebuttonProps = {
    image: string;
    onClick: VoidFunction;

}

export default function ImageButton({image, onClick}: ImagebuttonProps) {
 

    return (
      <>
        {/* <b>knap</b> */}
        <button className="imageButton" onClick={onClick}>
          {" "}
          <img src={image} alt="" />{" "}
        </button>
      </>
    );
  }


