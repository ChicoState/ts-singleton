import {Leaderboard} from './Leaderboard';

describe("Leaderboard tests", ()=> {
  test("Leaderboard by default should have 5 Empty Spots, each with 0 score", () => {
    let list: Leaderboard = Leaderboard.get_instance();
    expect(list.as_string()).toBe("1. Empty 0\n2. Empty 0\n3. Empty 0\n4. Empty 0\n5. Empty 0\n");
  });
  test("Low score should not be added", () => {
    let list2: Leaderboard = Leaderboard.get_instance();
    list2.add_leader("new",-1);
    expect(list2.as_string()).toBe("1. Empty 0\n2. Empty 0\n3. Empty 0\n4. Empty 0\n5. Empty 0\n");
  });
  test("Top score goes to 0 index", () => {
    let list3: Leaderboard = Leaderboard.get_instance();
    list3.add_leader("new",1000);
    expect(list3.as_string()).toBe("1. new 1000\n2. Empty 0\n3. Empty 0\n4. Empty 0\n5. Empty 0\n");
  });
  test("Middle scores insert appropriately even when added out of order", () => {
    let list4: Leaderboard = Leaderboard.get_instance();
    list4.add_leader("FIRST",1000);
    list4.add_leader("THIRD",998);
    list4.add_leader("SECOND",999);
    expect(list4.as_string()).toBe("1. FIRST 1000\n2. SECOND 999\n3. THIRD 998\n4. Empty 0\n5. Empty 0\n");
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
    let initial2: Leaderboard = Leaderboard.get_instance();
    initial2.add_leader("fifth",1);
    initial2.add_leader("fourth",2);
    initial2.add_leader("third",3);
    initial2.add_leader("second",4);
    initial2.add_leader("first",5);
    let duplicate2: Leaderboard = Leaderboard.get_instance();
    expect(initial2.as_string()).toBe(duplicate2.as_string());
  });
  test("Changes to second instance of Leaderboard reflect changes in first", () => {
    let initial3: Leaderboard = Leaderboard.get_instance();
    let duplicate3: Leaderboard = Leaderboard.get_instance();
    duplicate3.add_leader("fifth",1);
    duplicate3.add_leader("fourth",2);
    duplicate3.add_leader("third",3);
    duplicate3.add_leader("second",4);
    duplicate3.add_leader("first",5);
    expect(initial3.as_string()).toBe(duplicate3.as_string());
  });
});