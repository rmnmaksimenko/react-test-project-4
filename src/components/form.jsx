import useLocalStorage from 'hooks/useLocalStorage';

export default function HookForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <form>
      <p>Почта</p>
      <input type="email" name="email" onChange={handleChange} value={email} />
      <p>Пароль</p>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
    </form>
  );
}
