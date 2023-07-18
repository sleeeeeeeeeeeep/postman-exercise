/**
 * Pre-request Script
 */
const id = 1
const url = pm.environment.get("url") + '/posts/' + id;
console.log(url);

pm.sendRequest(url, function (err, response) {
    console.log(response.json());
});



/**
 * Tests
 */
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("id test", function () {
    const resPost = pm.response.json();
    pm.expect(resPost.id).to.eql(1);
});