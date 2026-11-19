const events = {};

export function subscribe(eventName, callback) {
  if (!events[eventName]) {
    events[eventName] = [];
  }

  events[eventName].push(callback);

  return () => {
    events[eventName] = events[eventName].filter(
      (listener) => listener !== callback
    );
  };
}

export function emit(eventName, data) {
  if (!events[eventName]) return;

  events[eventName].forEach((callback) => {
    callback(data);
  });
}
