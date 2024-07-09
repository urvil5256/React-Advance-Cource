import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasCharacter, setHasCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNumber) str += "0123456789";
    if (hasCharacter) str += "`!@#$%^&*()_+{}:<>?</>";

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, hasNumber, hasCharacter, setPassword]);

  //useRef hook
  const passwordRef = useRef<HTMLInputElement>(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, hasNumber, hasCharacter, passwordGenerator]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 m-4 bg-gray-800 text-orange-500">
      <h1 className="text-4xl text-center mb-3">Password Generator</h1>
      <h4 className="text-xl text-center mb-3">
        Using useState, useEffect, useCallback and useRef
      </h4>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-3 px-3"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value as unknown as SetStateAction<number>);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={hasNumber}
            id="numberInput"
            onChange={() => setHasNumber((prev) => !prev)}
          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={hasCharacter}
            id="characterInput"
            onChange={() => setHasCharacter((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
};

export { PasswordGenerator };
