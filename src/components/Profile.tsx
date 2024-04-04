type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({ email, isActive, name, singleLine }: ProfileProps) {
  {
    if (singleLine)
      return (
        <p>
          <b>{name}</b>, {email}, {isActive ? "Aktiv" : "Ikke aktiv"}, {singleLine}
        </p>
      );
  }
  {
    return (
      <div>
        <p>
          Navn: <b>{name}</b>
        </p>
        <p>Email: {email}</p>
        <p>Aktiv: {isActive ? "Ja" : "Nej"}</p>
        {/* <br></br> */}
        <hr></hr>
      </div>
    );
  }
}
