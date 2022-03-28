const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const EVENT_START = 'start';
const EVENT_SUCCESS = 'success';
const EVENT_NOTICE = 'notice';
const EVENT_MULTIPLE_LISTENTER = 'multiple_listener';
const EVENT_

// register a listenter on given event and then trigger then event;
eventEmitter.on(EVENT_START, () => {
  console.log('event-start');
});

eventEmitter.emit(EVENT_START);

// pass and reciver args when trigger give event
eventEmitter.on(EVENT_SUCCESS, (...args) => {
  console.log(EVENT_START, args);
});

eventEmitter.emit(EVENT_SUCCESS, 1, 2, 3, 4, 5);

// multiple trigger a event
eventEmitter.on(EVENT_NOTICE, () => {
  console.count(EVENT_NOTICE);
});

eventEmitter.emit(EVENT_NOTICE);
eventEmitter.emit(EVENT_NOTICE);

// add multiple listenter on give event;
eventEmitter.on(EVENT_MULTIPLE_LISTENTER, () => {
  console.log(EVENT_MULTIPLE_LISTENTER, 'first listener');
});

eventEmitter.on(EVENT_MULTIPLE_LISTENTER, () => {
  console.log(EVENT_MULTIPLE_LISTENTER, 'second listener');
});

eventEmitter.emit(EVENT_MULTIPLE_LISTENTER);

// remove listenter on given event;
// trigger once listener;
// ...
