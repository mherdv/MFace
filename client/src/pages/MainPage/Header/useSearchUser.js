// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function useSearchUser({
  userSearchAction,
  userSearchClearAction
}) {
  const [value, setValue] = useState("");

  function onChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue.trim()) userSearchAction({ fullName: newValue.trim() });
    else userSearchClearAction();
  }
  function onFocus(event) {
    const newValue = event.target.value;
    if (newValue.trim()) userSearchAction({ fullName: newValue.trim() });
  }
  function onUserClick() {}

  return { inputValue: value, onChange, onFocus, onUserClick };
}
