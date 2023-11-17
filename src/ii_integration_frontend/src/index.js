import {
  createActor,
  ii_integration_backend,
} from "../../declarations/ii_integration_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

let actor = ii_integration_backend;

console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);

const whoAmIButton = document.getElementById("whoAmI");

whoAmIButton.onclick = async (e) => {
  e.preventDefault();
  whoAmIButton.setAttribute("disabled", true);
  const principal = await actor.whoami();
  whoAmIButton.removeAttribute("disabled");
  document.getElementById("principal").innerText = principal.toString();
  return false;
};

const loginButton = document.getElementById("login");

loginButton.onclick = async (e) => {
  e.preventDefault();
  let authClient = await AuthClient.create();

  await new Promise((resolve) => {
    authClient.login({
      identityProvider:
        process.env.DFX_NETWORK === "ic"
          ? "https://identity.ic0.app"
          : `http://localhost:4943/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai`,
      onSuccess: resolve,
    });
  });
  const identity = authClient.getIdentity();
  const agent = new HttpAgent({ identity });
  actor = createActor(process.env.CANISTER_ID_II_INTEGRATION_BACKEND, {
    agent,
  });

  console.log("After loading");


  var element3 = document.getElementById("register_section");
  element3.style.display = "block";


  var element1 = document.getElementById("login");
  element1.style.display = "none";
  var element2 = document.getElementById("login2");
  element2.style.display = "none";

  return false;
};

console.log("On loading");

function isEmpty(str) {
  str = str.trim();
  return (!str || 0 === str.length);
}

function remove_hash_from_url() {
  var uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("#"));
    window.history.replaceState({}, document.title, clean_uri);
  }
}

$("#reg_form").on("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.toString();
  const phone = document.getElementById("phone").value.toString();

  const greeting = await ii_integration_backend.WhatsApp_API_request(name, phone);

  document.getElementById("register_feedback").innerHTML = greeting;

});

document.getElementById("login2").addEventListener("click", loginCheck);

function loginCheck() {
  document.getElementById("principal").innerText = "";

  var element = document.getElementById("login");
  element.click();

}