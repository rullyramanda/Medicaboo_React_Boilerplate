export default function createAsyncActionTypes(actionName) {
  return {
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILED: `${actionName}_FAILED`,
  };
}
