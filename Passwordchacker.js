function spyVault(message, password) {
    let attempts = 0;

    function checkPassword(inputPassword) {
        if (attempts >= 3) {
            message = null;
            password = null;
            console.log(`💥 Memory Wiped! Vault locked forever.`);
            return;
        }

        if (inputPassword === password) {
            console.log(`🔓 Access Granted: ${message}`);
        } else {
            attempts++;
            console.log(`🔒 Wrong Password! Total wrong attempts: ${attempts}`);
            if (attempts >= 3) {
                message = null;
                password = null;
                console.log(`💥 Limit Reached! Memory Wiped.`);
            }
        }
    }

    function changePassword(oldPassword, newPassword) {

        if (attempts >= 3) {
            message = null;
            password = null;
            console.log(`💥 Memory Wiped! Vault locked forever.`);
            return;
        }

        if (oldPassword === password) {
            password = newPassword;
            console.log(`🔑 Password changed successfully!`);
        } else {
            attempts++;
            console.log(`❌ Auth failed. Cannot change password. Total attempts: ${attempts}`);
            if (attempts >= 3) {
                message = null;
                password = null;
                console.log(`💥 Limit Reached! Memory Wiped.`);
            }
        }
    }

    return {
        check: checkPassword,
        change: changePassword
    };
}

const myVault = spyVault("Secret Data", "K123");

myVault.check("WRONG_1");
myVault.check("WRONG_2");
myVault.check("WRONG_3");
myVault.check("K123"); 