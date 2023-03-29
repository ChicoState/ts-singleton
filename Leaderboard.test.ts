import {Leaderboard} from './Leaderboard';

describe("Leaderboard tests", ()=> {
  test("Leaderboard by default should have 5 Empty Spots, each with 0 score", () => {
    let list: Leaderboard = Leaderboard.get_instance();
    expect(list.as_string()).toBe("1. Empty 0\n2. Empty 0\n3. Empty 0\n4. Empty 0\n5. Empty 0\n");
  });
  test("Leaderboard by default should have 5 Empty Spots, each with 0 score", () => {
    let list: Leaderboard = Leaderboard.get_instance();
    expect(list.as_string()).toBe("1. Empty 0\n2. Empty 0\n3. Empty 0\n4. Empty 0\n5. Empty 0\n");
  });
});

describe("Leaderboard should be a singleton", ()=> {
  test("Second instance of Leaderboard should duplicate first if both instances are captured first", () => {
    let initial: Leaderboard = Leaderboard.get_instance();
    let duplicate: Leaderboard = Leaderboard.get_instance();
    initial.add_leader("fifth",1);
    initial.add_leader("fourth",2);
    initial.add_leader("third",3);
    initial.add_leader("second",4);
    initial.add_leader("first",5);
    expect(initial.as_string()).toBe(duplicate.as_string());
  });
  test("Second instance of Leaderboard should duplicate first even after first is initialized", () => {
    let initial: Leaderboard = Leaderboard.get_instance();
    initial.add_leader("fifth",1);
    initial.add_leader("fourth",2);
    initial.add_leader("third",3);
    initial.add_leader("second",4);
    initial.add_leader("first",5);
    let duplicate: Leaderboard = Leaderboard.get_instance();
    expect(initial.as_string()).toBe(duplicate.as_string());
  });
  test("Changes to second instance of Leaderboard reflect changes in first", () => {
    let initial: Leaderboard = Leaderboard.get_instance();
    let duplicate: Leaderboard = Leaderboard.get_instance();
    duplicate.add_leader("fifth",1);
    duplicate.add_leader("fourth",2);
    duplicate.add_leader("third",3);
    duplicate.add_leader("second",4);
    duplicate.add_leader("first",5);
    expect(initial.as_string()).toBe(duplicate.as_string());
  });
});