import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
import Cycles "mo:base/ExperimentalCycles";
import Array "mo:base/Array";
import Nat8 "mo:base/Nat8";
import Text "mo:base/Text";

import Int = "mo:base/Int";
import Time = "mo:base/Time";
import Principal = "mo:base/Principal";

import Types "Types";

actor {

    public shared (msg) func whoami() : async Principal {
        msg.caller;
    };

    public shared func greet(name : Text, phone : Text) : async Text {
        return "<div class='alert alert-success' id='alert_success' role='alert'> Hello, " # name # ", your phone number is (" # phone # ") </div>";
    };

    public shared (msg) func WhatsApp_API_request(name : Text, phone : Text) : async Text {
        let ic : Types.IC = actor ("aaaaa-aa");

	// Gateway to confirm consensus across multiple nodes and prevent redundant requests through the use of an idempotency key.
        let host : Text = "cloud.mabopay.com";
        let url = "https://cloud.mabopay.com/icp-request";

        let now = Int.toText(Time.now());
        let caller = Principal.toText(msg.caller);
        let combo = now # caller;

        let idempotency_key : Text = combo;
        let request_headers = [
            { name = "Host"; value = host # ":443" },
            { name = "User-Agent"; value = "http_post_sample" },
            { name = "Content-Type"; value = "application/json" },
            { name = "Idempotency-Key"; value = idempotency_key },
        ];

        let request_body_json : Text = "{ \"name\" : \"" # name # "\", \"phone\" : \"" # phone # "\", \"ID\" : \"" # idempotency_key # "\" }";
        let request_body_as_Blob : Blob = Text.encodeUtf8(request_body_json);
        let request_body_as_nat8 : [Nat8] = Blob.toArray(request_body_as_Blob);

        let transform_context : Types.TransformContext = {
            function = transform;
            context = Blob.fromArray([]);
        };

        let http_request : Types.HttpRequestArgs = {
            url = url;
            max_response_bytes = null;
            headers = request_headers;
            body = ?request_body_as_nat8;
            method = #post;
            transform = ?transform_context;

        };

        Cycles.add(21_850_258_000);

        let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

        let response_body : Blob = Blob.fromArray(http_response.body);
        let decoded_text : Text = switch (Text.decodeUtf8(response_body)) {
            case (null) { "No value returned" };
            case (?y) { y };
        };

        decoded_text;
    };

    public query func transform(raw : Types.TransformArgs) : async Types.CanisterHttpResponsePayload {
        let transformed : Types.CanisterHttpResponsePayload = {
            status = raw.response.status;
            body = raw.response.body;
            headers = [
                {
                    name = "Content-Security-Policy";
                    value = "default-src 'self'";
                },
                { name = "Referrer-Policy"; value = "strict-origin" },
                { name = "Permissions-Policy"; value = "geolocation=(self)" },
                {
                    name = "Strict-Transport-Security";
                    value = "max-age=63072000";
                },
                { name = "X-Frame-Options"; value = "DENY" },
                { name = "X-Content-Type-Options"; value = "nosniff" },
            ];
        };
        transformed;
    };

    public shared (msg) func generateUUID() : async Text {
        let now = Int.toText(Time.now());
        let caller = Principal.toText(msg.caller);
        let combo = now # caller;
        combo;
    };

};
