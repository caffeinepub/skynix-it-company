import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phoneNumber : ?Text;
    companyName : ?Text;
    message : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(contactSubmission1 : ContactSubmission, contactSubmission2 : ContactSubmission) : Order.Order {
      Nat.compare(contactSubmission1.id, contactSubmission2.id);
    };
  };

  let submissions = Map.empty<Nat, ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submitContact(
    name : Text,
    email : Text,
    phoneNumber : ?Text,
    companyName : ?Text,
    message : Text,
  ) : async Nat {
    let id = nextId;
    nextId += 1;

    let submission : ContactSubmission = {
      id;
      name;
      email;
      phoneNumber;
      companyName;
      message;
      timestamp = Time.now();
    };

    submissions.add(id, submission);
    id;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmission(id : Nat) : async ContactSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };
};
