export const GetFirebseAndDeviceID = () => {
  const firebaseId = window.Android.getFirebaseId();
  const deviceId = window.Android.getDeviceId();
  const deviceName = window.Android.getDeviceName();

  return {
    firebaseId,
    deviceId,
    deviceName,
  };
};
