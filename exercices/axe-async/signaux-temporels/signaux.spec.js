import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import {
  runLater,
  sendSignal,
  doubleLater,
  delayedStatus,
} from './signaux.js';

describe('signaux temporels', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('runLater exécute le callback après le délai', () => {
    const callback = jest.fn();

    runLater(callback, 1000);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(999);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('sendSignal transmet le message après le délai', () => {
    const callback = jest.fn();

    sendSignal('NEXUS', 500, callback);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(499);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('NEXUS');
  });

  test('doubleLater transmet le double de la valeur après le délai', () => {
    const callback = jest.fn();

    doubleLater(5, 250, callback);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(249);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(10);
  });

  test('delayedStatus construit le message attendu après le délai', () => {
    const callback = jest.fn();

    delayedStatus('Portail', 200, callback);

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(199);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('Portail prêt');
  });
});
