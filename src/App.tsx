import MyComponent from "./components/MyComponent";
import { transform } from "./user/transform";

const users = [
  { id: 1, name: "jack", disabled: false },
  { id: 2, name: "admin", disabled: true },
];

const feUsers = transform(users);

export default function App() {
  return (
    <ul>
      <li className="box">
        <pre>转换前的用户数据: {JSON.stringify(users, null, 2)}</pre>
        <pre>转换后的用户模型: {JSON.stringify(feUsers, null, 2)}</pre>
      </li>

      <li className="box">
        <MyComponent />
      </li>
    </ul>
  );
}
