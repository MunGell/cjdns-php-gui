/* jscrypto library, rsa cryptosystem
 *   by GUAN Zhi <guanzhi at guanzhi dot org>
 */
 
var digest = {};

var sha1 = digest.sha1();
md.init();
md.update();
hash = md.final();



var RSA = {};

rsa.rand_key = rsa_rand_key;
rsa.ssa_pss_params = {
	digest = sha1;
	mga = mgs_sha1;
};


function rsa_rand_key(bits, e) {
	this.p = bn_rand_prime(bits);
	this.q = bn_rand_prime(bits);
	this.n = bn_mul(p, q);
	this.e = 65537;
	this.barrett = new bn_barrett_u(m);
}

function rsa_encrypt(rsa_key, bytes) {
	
	var r = bn_mod_barrett_pow(bytes, ras_key.e);
}

function rsa_decrypt(rsa_key, bytes) {
	
	r = bn_mod_barrett_pow(bytes, rsa_key.d);
	
	return r;
}