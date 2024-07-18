'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7e803869b74fc744e9202982fc2556b8",
".git/config": "aa0e9d662f7a2a7734939149ba837610",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6911a8194cf9152ce6e481ea253bc50c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05b4c99a6905a1b07119626f6fa459fd",
".git/logs/refs/heads/main": "0ec2e4a9fa93d5fb07f82370725a7204",
".git/logs/refs/remotes/origin/main": "83a04beb6ae41517f1c0985bf8cc1e67",
".git/objects/00/703d384d7dd4d0c7b9b2570516a953f59d36cf": "0eb22e67a408e13528eea3d004bf2f89",
".git/objects/04/ba4aeb43ce400e448b576d7aa9fbcbc24a12d2": "59640a9bccfc99f7ed754fe46abf67d4",
".git/objects/04/db26a451bfa7eb9532bed82744b4f4429857a0": "0988416ee292fc9db7f0196586723d62",
".git/objects/06/894bbb7fb56fdcd737c593ec5885863091d9d7": "f969e05d97d8593c562042e569093c5c",
".git/objects/08/75268d8cc3dbd3618e046f79849a6586acaa3e": "1085e63f65d69e7c89ce809ee4c7e6ed",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/a79f75ce978968e1de4c5036cd021f4ba6080c": "8181fe0ecf58e2528fe74847b8464af2",
".git/objects/0b/d5317897193cda9f96aef5bb5401f752721633": "c7832c59dfd0f1f639ea39ee678a7e44",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0d/3a1fbb142c51738dc2b6b1f28b44ddb425e1bc": "75be4476f0582091bb1bc7b065aeaf20",
".git/objects/0f/3f9dfc3dfd7f4289e1147620f90c13304098f8": "e5477e4aab4acddee3d0894bb9d1e317",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/4f4315904e025c13239fd72cd538b7c29d31d2": "073531eb4c8612e8f828378f2fb2cf4d",
".git/objects/12/58e97b2b631c171b113bcd3a22e74fb99507af": "429416b92b311d52685dfe69c8158400",
".git/objects/13/23640a3de6c7f96e88fa92325ba257018183cd": "c56111d46c830b09f0d6ef99291c13ba",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/18/408b0045125b7d657d1342945d6b70b3de8887": "a99ca74c0e89e662bc45117a9679986a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/1697a90e5287fc2d72386922c8b03ea8f8d026": "505945960d0544fbc1d42b0d1485e8cf",
".git/objects/19/846966842178b5efdd4b2bf64aeafcf67d5970": "eda457469e6800843f8584f5da677643",
".git/objects/1b/7d8781508140a10b8b2d660c5042581b8117ab": "876268b68ad4f5a8e8392b9a8ce08922",
".git/objects/1e/a44d1c8c0faabc409ae9c0b0c3cd20daa6149b": "b8e73c3bd0d09a2645e05528e1ab5712",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8d625250a1bc71326720aa91ec55a22fcc52f4": "e76b6906e10d006e646043e847ea5c39",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/ac49dcc1b34b2a7ad2388d8c01d30becc6c8b3": "9f34e159625f6bd05debdb1535610d53",
".git/objects/22/272f5e7107711c8dbba8471251773ef2fcfc58": "a9d18837e508c93a63c1c9c63a244a26",
".git/objects/24/5bde1c5c674fdd5be4170e72e59c971eb833fd": "985d44b915c79f61b4267d693dbd6fda",
".git/objects/24/ec08d86f5a8ecb029a9e95afd6bba13e6dca79": "c3eb13ecb66834c456b92a6764110f1c",
".git/objects/26/219fa8860e1402212ba981f8504bd86efe807f": "5f23d64863ea165d48a89eec5d893796",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/28/9f2b8ccaebaa79190ce1f984afa4b9219bfe99": "c683b37d7905feacff39196959ddc8d6",
".git/objects/29/7deb6e36ccbecc460587c04cc2e9b252eb7932": "5d88e1a3930cd5d157778ccab3c1b031",
".git/objects/2d/d7298fb27d9e03c42c7b7ad705900553f99425": "88d78abc8a9510a2e70bda881c6383a8",
".git/objects/2f/5b3d565a9e22fd09b5e6799b2fbf2b1c6355b6": "f6de7757e19e554561999dc6911126a3",
".git/objects/30/27745ff4cb0e6c3e9ab7884b1c25f6b47be72f": "2ce5847a60cd23b0514c600f576ee564",
".git/objects/30/e207b5a2cd89585fb6f6064e2ad56e9a91da65": "56a8cb47f52beb4e32a57cb1e5847a0d",
".git/objects/31/46d035744513a419e543b6d4bebbfb57bd0bd0": "725ec653c72ed5c954a9f8d52c1cb46c",
".git/objects/35/539a5e45407a29d7025af380c3bb6e40ce44e1": "e63ac68e15fe5c16b41ec8159c63e4ec",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/38/d1382f8e03f5ed2d891b9fe3d7707fa1a38f4f": "254d0232ec1710fade0a13d6001c08e7",
".git/objects/39/9f82df900c4e54dfb66714711eb73348de89dd": "b504426992fd057a32ead9ba8dd1d2d9",
".git/objects/3b/b65a6e6243ed9ab82a63cc7387908597ef6d1b": "c7ceddc6cf97b2788ee7aaea1cb61644",
".git/objects/3c/999d29ecadbeb5a5ec634a2cbf39ca2f1aa288": "d743805444c1dd22772f657f6712ab36",
".git/objects/3d/b3377c0de87f78a76a17f335000b1326af1bd3": "ab4bf3dbb1727db3a587ff4f576eb6cd",
".git/objects/3e/a33cc688e686c0a19bb4aaef8617f8b8456724": "9e4d88916426d78e66d820768e5a2aa3",
".git/objects/40/5b38b71bf34fbf527d73623fc665d90c3b9f7e": "591915e12ee28b0f21eeb43c839cdfc5",
".git/objects/40/7c64c144b71a03ce705a237dc5cff0d8bc5ce0": "653a59dcebcae3e8abe4c89a1a50baad",
".git/objects/42/3cf5e1fca09ce2feea6071a73debca6b5690ea": "e779a5deea2eaee41c5c89a00d39d79c",
".git/objects/43/f9e88a8ca2825989dfc1ead9f59a60863af67e": "3753a0f53748041606e231aab7de71ce",
".git/objects/44/62246d1f5c70b844f8109d86ca6159e0268bf0": "f013a4713cd28b9966f5a14bfafd4d8a",
".git/objects/45/182ae9ebc2c0f45c04eaeb22513c0f5f7ccf3c": "6cb184506534ee65cfb56f7bb5153696",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/e16f2d9ce9837ccdfb4298747ec74fcc42b857": "c669fbb91a26c91ca6faa3852e2d342e",
".git/objects/4a/91e9455211474005cd2652b58ceaed7e17b8e2": "65c0597d55f9e7d6ae5ddd5baec52afd",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/1ea623f2f5830e61bb0d1d7948a44c7fa02aa0": "6b36c77ab07f969c619e7c6b6f7266da",
".git/objects/4d/dfd64326ac0f386555c10839483d1b182e8bd6": "84dccd7b54677fc2868e885ae23093a1",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/4f/9c92b34e5566e878f007520d75dbf8cd47838c": "c9e1b310f37cac4acf9f19812a2b7a8e",
".git/objects/4f/b2bc1b8c8f585027461d30e3cba152ff9d946e": "1803e64f2fffb1479b463af7840c519e",
".git/objects/52/ca95b6d883ad30f3b8386e34f44cb71e0edd9b": "dc934001998ba3114346eff308b9eeee",
".git/objects/53/e46a7f0ab6c7868c82918c5e960b51ee6c31c3": "ac0402001e54009a917e5c4e82a52ecc",
".git/objects/54/3ee4e6f89fe1a017e5b06afa4f2216b4ee24ce": "5d1e22de563a0662f1606d7d83056c1e",
".git/objects/57/ad8f98de1db4155076a254604ac99bd32e6330": "60ff5d15ea3cb42b7e0a0fe7a7918459",
".git/objects/58/33087c561734f852a8839d2bcd21701eb51ee2": "1cd1ccaaa3d54d5672ca39a48182c1ec",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/b9cfd346d3c2a93a5115d4f5782d6236ac6835": "07d48771f4224d7641cf12d012f16e42",
".git/objects/5b/216b4993f426c8959789a20f840a26870163fd": "f20825043875ef26fdc63313f2fe1e34",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/5c/55ea402c1e2e5ea74175910feb5d59e6dcd75c": "7bd290592d38abdf1a40f2201082c8c5",
".git/objects/5c/7595fffc82edcddabf03c2f0c7332c6a9972c7": "f43554a63522e6024ef7c77690610520",
".git/objects/5d/62e274fb685b42ce8e868eb6cb4f65007f1759": "3e90fd15116c75b78863da6488561527",
".git/objects/5d/f5ce3d94651462f4844d42b3251b82b3d76dea": "d514dc2d1b2fe825f8a01b53a2d9f7d0",
".git/objects/5e/4af09acfe3de594578f72d625ebebdb86ea446": "b9f9d774d36e8133fe98fafe78fae1e6",
".git/objects/5f/97c1215259342f6b47609f773c61c176f8e896": "8c14da773668f5af9de8d44cd15d1938",
".git/objects/5f/d1b9a3e0527dd8a9662929cdc97f1aad348083": "5f54c45fa20324d7ee0f36331cff3abe",
".git/objects/62/616aa2473421fc7c4eacb843883642b5dabbd9": "afae4cdf9e1143e4e752bfff792315d9",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/fc1624d93d7ed665b9c6f6908f0b4da73f40db": "cf0680a27c639001c631a00fe71a3a27",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/68/00f8cdc52b753be255b738331f1c1186a7f68f": "16ff9706f671832dcec3576372f83f1b",
".git/objects/68/daeb5224ff4f8f47cf25405e4c4752a7dbf444": "bc5e364f90d7aa7b48412390041d5bac",
".git/objects/6b/36a87ab7edfec315a683e70c86291cc3bdfabd": "849ed06ab00d237a55f67408d6b3b2ea",
".git/objects/6b/fc57ac92d350edb484fcbb809ea7f24de4b934": "81571a4c7f3d0650a12de9c46e7a6d34",
".git/objects/6c/d2d6dfa91d329f6e71c1ef02eda283cbc01009": "de5136bc5a5f7325708c37ed1fb41f49",
".git/objects/6d/f60a6bed2604aebb030b518b3557034fc31aca": "a59e203e19eaab5e1d2b44338c11cba6",
".git/objects/6d/ff0e7c986e662545bd7b978eceabbb32b8324f": "2e4d0ed03fe8ff8ea1a7c7733f28b975",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/72/60eee8f833f00e481b3288647e2c56e89e08d6": "078d31f878520198054aa3b88bddcc64",
".git/objects/7a/41cab12ad5e856964dbef0c5583c70897e0e99": "3befb4df1dccf49d05872c89c2d6fd56",
".git/objects/7d/5588df3dcfbea585b6f532ee111976d654a8f2": "4f386c4e8f631f2736076cee7b66f7a4",
".git/objects/80/1ee0ed814adb44b9e065159d514676f13575a4": "2c95a76db73b4599da7ee2ac312fd5e8",
".git/objects/82/c4c5a353fea87f421a6ab041bcda5ec5a70b27": "b307a840aa7702c39d631f4940719764",
".git/objects/83/cacc9b4b639ed3fd87ad06db85b8d079710208": "8e6b84ae826a0eb1bb3cfe005b4f493e",
".git/objects/84/000a4c069ca463576448840f05d4b9f2f250c5": "4c6c060e079ef898cb67440a2cde3e36",
".git/objects/84/894de39369aa59752f201a7a3f05864a1d4664": "8703901dff4096e168084a7bb78f82dc",
".git/objects/84/b622df5aba16ff3a8ce2466b24150c2e432d0c": "8a51943005a40f3822217bef16ad674f",
".git/objects/84/f9c3428a5baacdc8367a69320ec3b98837f885": "c1f0a241cf87f8751549f8448d74344a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/ebb3de050ffdc6435612828b8d8f63ddaedc00": "b5cf54b42bd96e6194c5a321c1c148f5",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/3a8c36ec99dd8bea69d6dd4a0745701cf70b77": "59ac05eab1dbebb4c2c5bdef798c12f2",
".git/objects/86/5f9080af2fa1bebdfcf53f890ecea8001afe10": "f7308a8e9a3c2a697c851984dbf59a6f",
".git/objects/87/5ac02e4256c2a3c940c2eaae705c2adfc17d36": "bc255b4d3731358db8db5d1b8af92c57",
".git/objects/88/e39c9b0ab8c55c492c89e0ce3b842fca2519e0": "e231e4450793139e55e099512128e201",
".git/objects/89/1562df6ccad67ad87d0a83c51410f3c38c9838": "1881ac68108d07f84431d62e99209fc9",
".git/objects/89/81f24bdba85524d5cbc105fbf80136c7f15a37": "5f8680a6e60467f67b54591d4a85e0e1",
".git/objects/8a/204b1b080618f362d78645dcfeb737904a0b29": "d6a81bc8e69baf89d4b379251c929626",
".git/objects/8a/ca3179ba0c0943c12ad6e87d064e746074d117": "7cfd2e0896857319a013aaabfe25393d",
".git/objects/8b/ba2fc57618f1d1b5650ce2b584fdd8276b6624": "2ba8c34d254d4518e41eb1417c8dc847",
".git/objects/8c/8ffe19fc198c7062342053ea9ac74de2397725": "9bf403d5f777ff8d24a4381275fe1fe7",
".git/objects/8c/e1c65ed6867ccfb245302b851cea359ec95daa": "fff554d74672d9324432c2b93425eb95",
".git/objects/8d/6499873c4dbb6576e67ad542fa7e101d8cf828": "e54b54ed7ca632c6fe0e3ca7882f3c96",
".git/objects/8d/65cf36f2e735d60c47261e561f13e39489bc74": "8f82132c9da12a26f0b9bcfd45e7ef80",
".git/objects/8d/70f589d832d3c816971fcda979c3fc33560b09": "eaf75fef35d0bca5ef3b9365d17cd2cf",
".git/objects/90/9797e054c8f851c8ad7caa16e453d7abbf424b": "e22f4d9fb5d799dfb87f835855c54104",
".git/objects/90/e34cd81ffcc52971f36fae06d1f19113c17c5c": "9c987919a26d975eaecd9b618d60be2b",
".git/objects/91/dcaab82f4361482db96f4835a89989d42cc235": "8d28c7c04db584d4c261eba4d215413b",
".git/objects/92/2aa7d2a75d14eed62748fcc3ac477781264a5d": "8b4c85000a0f67710b8085dc576548ad",
".git/objects/93/0b37276c07b805c56ba3571214c7fb1b55054f": "37f65d360f642cf81c3f7ea04d70827a",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/6c4c95512c0eb7d81d1b90854970248c6fb7ff": "4562edf38203ded6790ae8262968d836",
".git/objects/94/abefdb7382fd3adbbf7976854c44ffe56736b8": "a92b0ae43928df10d3c3035d834da2e0",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/4fa8383a2d185a7b8ee498da33c8f48fee38cb": "002c16291d82253b92d115054a60d36b",
".git/objects/96/a367811ffd546204e0493fc14029b8ce37c5ad": "9656e68f1a29a44a100d2deb2834294e",
".git/objects/96/b4ad2aa757979c211ffe6ebe98e41f2e6bb3e0": "4c8a82818107d236d580fe6580986c74",
".git/objects/9a/f324ef277d91d3f8ff2cc4abcfa01e548d4905": "84cc46eb40d41a9f4fa24d9716569d8a",
".git/objects/9c/a2b0cf979744d16987fd812ba86e6f5ba13ffa": "3ab99422af927b6de12927941d5c6216",
".git/objects/9c/fc06d009159319a76f416dfabd86e181ae5230": "d37bfc0521bcf788139ef7dedf7165a5",
".git/objects/9c/fc31848c3f469ca1fad7dbf3f5fee9f65c72e3": "472cbcdafff7bda76506ca5f2bde95d3",
".git/objects/9d/8ced0216295e437e82b5f4fec8e21c7b22354c": "8d97b755500b192c79d0d75f01d473ee",
".git/objects/9f/fb210f9eccb6b54d25942b44dca44b47fc5188": "615fac813cb5bbb4401d6790c78be0b0",
".git/objects/a1/becb51b2a03401631233f10ca7205c227925e4": "588c69500a45660caba680ab87fd7a4a",
".git/objects/a2/b4e71ee38274f7ea00422119aae9f4a8c69e11": "a9014ff206518011aef6ff60e10fd59a",
".git/objects/a3/46fd7433def0c6493cf110cc4b5a801a98776c": "ecd57b305f1700b23c6aa554e40a8d2d",
".git/objects/a4/e623dafcb277f1a2e3b5f5d432c56daeea111e": "c572d5ff188de732cf91cb41c72d7b51",
".git/objects/a8/678b4194ace1db0c00b82c57311b379a0c3c28": "e8af6908b487a28f628540ad2221d0b4",
".git/objects/a8/bd6e22eea24c3be37178b58cbc11671f4d1e65": "81714c1fdbec0667ab347679b0ca0c96",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/aa/50407fd6a90849d9298f23616e122846ebd04c": "85b25e6352b29ad3344cbe1eb14a3bfe",
".git/objects/ad/d56fe4e1e7bbd76cbff19a43042d408afe4ef9": "d6202c145dd384580de0139636668618",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/b6fb6b72ef7fefcf6c5074e7b447d94aca8554": "97923a7894ce9a31c81293fe85dc5a57",
".git/objects/b5/f46ac4baa2512c30040581d4ec806e98eb4052": "03f4a813db39662e48bda2fb5040ee6b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8017a9b686b8519ed13810ba8af876a4327e3e": "19dcb20af71cba3f40186a6a1d73cd48",
".git/objects/bb/b98f80f5591864910211eaca0474a076d958c3": "8519eaa9c591ffb668aa5f4e22ce55b9",
".git/objects/be/947d0baaff5624ec764b8f0ba89e6325b79891": "4eab78244646b528acd87ade39713754",
".git/objects/bf/8e45a60bdeb77c12bee47d83650aca8388cd88": "712cf1f2b4f54e61600d0cde4ddc02de",
".git/objects/c0/c956bb8cd7ba1cf27b65b5e377883371b30373": "1b752ce882eafd56a99233204dd57b6b",
".git/objects/c1/6135655882cb2f6c1d59b2f0f9cba9ca802917": "fcaf621339c233833058234775398023",
".git/objects/c1/e69622d06801bc058a1b083421fbe30565a358": "1eb3f25f8509adaf6ed06ddafb294bbd",
".git/objects/c2/62006674a7ac63e173c3d97e77fccc59238433": "5c383c14b223b6212cbcf51884abc106",
".git/objects/c2/c4b8a4f512304fde2213eb0ad42c74e077502b": "63858c21ecf34dc198cdd79492aab948",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "6a5802fd93c23b446375be0361b55c08",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "c7098e473a1fff4a06cf5b48046ed03b",
".git/objects/c5/25b6e5b2f8dfc0c06f5265f0ea841fb18d974c": "c62da8c33a773e3b3742c7fc094ebf57",
".git/objects/c7/57b79271160ea0e8f0699ba3affa2a640f87ae": "1d2d215fcdff9476673cf4ecc258d187",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/0eeb2f9da5da6f5cc1b5a10f4d432c22763cda": "6101147ea005a4d8c1160f6a6ea41e78",
".git/objects/ca/3c6b0620050473c99216d58e517936f85c0bc4": "25d07a4a93bbc96ea85d05758a8e8a2a",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "9461d3028da79a0612a5279bb9791892",
".git/objects/cc/8fd6d2df93f70f433db4ba4a9b102fca28df66": "3cde87ac1329fc8c3131b225c85f9632",
".git/objects/cd/1ec0ba61350ad483cef564b38dcac6bc9c750b": "c1e9815f9c86aa3b7c87718b0920a8ea",
".git/objects/ce/e6323a478b00b4c11abb3e22bd12489d87eec7": "eae1ff60ca114b7e096d3dd245e4d3ab",
".git/objects/cf/3f6af5350af8c14ad6d7bf2f2c1f9ccc49ce49": "c3d43c4848510b8541482396c89c3900",
".git/objects/d0/b25db4231607850fa72485afc3239fb1cf4121": "5a23c8440ff5a1de143f8452c6f49ae9",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/7e8b9a57bace421813633a9fe856158ccc7e4a": "62e09650d26e6cd0d7ec25128e904e72",
".git/objects/d2/6e88b546f138a687c69948e6c3a94444597792": "cc08719a152342d624d043b03a977051",
".git/objects/d3/ed55fd70971e631f76ff837def8bee335421a0": "fae7cd89b8bce2847c482376a82eb990",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/98b535f13b9fcdf9d8f7b9720b8f046f368552": "b0e931c06a061471267191cf302e5a53",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/cbb97debd9597bc78fc66f7d9f8b3e702effdf": "987544f9640eacf66ecd11465b06c303",
".git/objects/db/0e0c14963d75df4b75de98113422e53550f133": "f61996a4c390a7c62b84f04ea4630145",
".git/objects/dc/5da12a471a4da3f2fdb7a0c31af6150b8f0980": "c587e0834fab91c00ce772ae6fa312da",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dd/85d22293d65748a30a53ba5c8b96be034bc4ae": "af49b0814ed065bbf3daabac7c83bcd7",
".git/objects/df/f35bde017dcf8dc7d405fbe332e72a948e3723": "7bd45440645c58f0880c6480cc1623bb",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/925720d263773c7f90c7760ed8f0dfb3896b71": "c0d867d209a646272de1a94725707317",
".git/objects/e6/2652c42c6697b8d7438708017896f3afea3615": "07155d54fcaa0a587a4f892b401322c1",
".git/objects/e6/887deb69a48e3320e887e5ee31a80718a0c242": "7008fcde71884734cb452e6deaa026f3",
".git/objects/e6/ee081f5c86719db4bcb1ff4cc181aa52e0c7ec": "bdfa147c1dda808ce00358deb0d5ebe2",
".git/objects/e7/649c808a37fd5f75ca52f165b1e7658cef6c3e": "030b6a5a4e6bb7626a167b8f8adf0468",
".git/objects/e7/a50fcfd4f3c56dde3f38d5a233de9f9adeb578": "b22b3b0ee25dd677e3eb34741d04a8d2",
".git/objects/e8/1756c4540d01901fe5e28ed37937befbb5879c": "2e529e4a624566ae4be9f2a55397d58b",
".git/objects/e8/2c8b776c1311baf8947805d6cf313252a9f9cf": "d39a2024d36b6227e254d4551d1fd0e1",
".git/objects/ed/b49e3039ad5ae52aeeee58c6225b75dbe0b700": "35e239cf185a76c64c0712b71a4545e3",
".git/objects/f0/c109b8831d1ad16677dfeaf6309fc1297e4112": "52f933009101494afa329ae9a0b35ed5",
".git/objects/f1/5cf46d2752056b4e803ff93882cb5a4ab104fc": "24527a4733835d468035c7a3a30d11b6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/630bcd64a37047da0c2ad3c5ff694c1395d804": "5937b176dc1843a92afe93696dee5fba",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f8/6b249480d463684b54268b1f93268490bf8c4d": "9186872466198be8c724395dd8a35874",
".git/objects/f8/b9c5e00e0e61aaeeaede8991040744058a28be": "7e29e4e6ea76cf1b977fb018013edbb1",
".git/objects/f9/15e62f17e64f601492213618c24eb3de7e2d1e": "1eb90c102edd10234d589731a8908594",
".git/objects/fb/3ec7dee08bad8e0cf89bf9fcf3c91bd5edacd7": "3c72ade288658e462fc8e3f99475411d",
".git/objects/fc/11d1ce4b7ba14377255c346c0ec8854661064c": "45eca2b714da69515682255044a0091d",
".git/objects/fc/e067fa0836c258d8d5cd0360d5a0bcfe7cb32b": "2a4e41eef967a5cac7ad00791cb37eda",
".git/objects/fd/9e5cccfad2509b4e45bf67529d9b7f5d6371a6": "ca2f960673a41c192ccf89860ca627e0",
".git/objects/fe/015f9d4b1b9f3ccef346344084e0089bd3ef54": "935e8f8b2e244f711589cafd74326d85",
".git/objects/fe/61778b2918d8e9a4557de30bcd23273909a2f6": "e4a26435a2b0db86100b0154f40b6521",
".git/refs/heads/main": "aab61344f7467b61a4e3ca3fd70974c9",
".git/refs/remotes/origin/main": "aab61344f7467b61a4e3ca3fd70974c9",
".idea/misc.xml": "d28bf4f1bc0e803adeb8e915b0fab071",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/other.xml": "2eae2a5b0af88827eaaddc32de34f6bd",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "9f4ac40923533b9da6ddc58dc5f1f3fa",
"assets/AssetManifest.bin": "c74cc8095858fd84c4fcc2b9cbd164d5",
"assets/AssetManifest.bin.json": "3a8aed48be52c2ca2af9139a06b96487",
"assets/AssetManifest.json": "ee51c2329efd91f8cf22e21ded8d6e5c",
"assets/assets/datas/chat_date.json": "f0b71a28b55539da8f86ecd70a15aed7",
"assets/assets/datas/customers_data.json": "deaa6e5779c7610a779b493223a7d6d5",
"assets/assets/datas/departments.json": "f9bba14ae910e4f128796c96be123a19",
"assets/assets/datas/discover_data.json": "b7c3054d438ad515822e29d532a8545b",
"assets/assets/datas/job_vacancee.json": "d6d0f63bcc123c7ad829ad1a336ff680",
"assets/assets/datas/landing_data.json": "611fd74908c38a3bbea65cd55e7f0ef3",
"assets/assets/datas/products_data.json": "0010fb2134bff422fa2389f29f01c39e",
"assets/assets/datas/reviews_data.json": "31b992ecc6a0210e15c17b6bf0a5bfe6",
"assets/assets/icon/add_user.svg": "2c15f7731f88cd35d57a605a7f31f63a",
"assets/assets/icon/events.svg": "e6e2b666ebd43525ee9f21d703557e61",
"assets/assets/icon/fitness-svgrepo-com.svg": "b33441be3cf11e319078640a57ed00f0",
"assets/assets/icon/Generate%2520rollcall.svg": "a56de5dd96e5a93b36fc8be327760336",
"assets/assets/icon/librarian-svgrepo-com.svg": "fa2c317c5e3eff46efc72ae444213a76",
"assets/assets/icon/open_door.svg": "8a11bdc8a637b5c53d545fe156ac965b",
"assets/assets/icon/ophthalmology-svgrepo-com.svg": "ba1e9cdb81b51ea7c16b22a1d613c68f",
"assets/assets/icon/worker-svgrepo-com.svg": "57607da42daca4bfd3469d3ce4890cf4",
"assets/assets/images/add_user.png": "194960ee3c058fa1c18ebc8862b660d1",
"assets/assets/images/dummy/1.jpg": "6dd9e5b779dbbd9d62d0877fc7b43748",
"assets/assets/images/dummy/10.jpg": "72727e2cbd4e95dad31005a6f64ad553",
"assets/assets/images/dummy/11.jpg": "f774b24254052e87b577893240c9287f",
"assets/assets/images/dummy/12.jpg": "d046575b8636a0a7e179573a3ae02a1e",
"assets/assets/images/dummy/13.jpg": "f4e7b928c09757f06322f73d825ccc3d",
"assets/assets/images/dummy/14.jpg": "8278b9c949763b70ba034da3d4d01bac",
"assets/assets/images/dummy/15.jpg": "8e7e65bd31a5bd3d1c1575471205115e",
"assets/assets/images/dummy/2.jpg": "393b0a1efe502f0d75f0cbc63f987754",
"assets/assets/images/dummy/3.jpg": "724abbe8e77e3b1947626c161ac96d75",
"assets/assets/images/dummy/4.jpg": "2bbded6cfa2f25bbaa221d9b9631c279",
"assets/assets/images/dummy/5.jpg": "29cf385d776d483a34ad047822d5949c",
"assets/assets/images/dummy/6.jpg": "52ef62ecb6548394da4fcffa2bf82aed",
"assets/assets/images/dummy/7.jpg": "bebf52764bc8e61d03059305a38692b8",
"assets/assets/images/dummy/8.jpg": "eff7b76a83ed3c5c97af0c853612e35a",
"assets/assets/images/dummy/9.jpg": "9c13dd8c28df6d4d35ebfd8907dac1fa",
"assets/assets/images/dummy/avatar-1.jpg": "6b3d7fc9fc5c13c563ca66847b87c67d",
"assets/assets/images/dummy/avatar-10.jpg": "d80707cfaa72d68e9f15521c5912fd7e",
"assets/assets/images/dummy/avatar-11.jpg": "27639ad85f5b3fe0e348fd357a7aba43",
"assets/assets/images/dummy/avatar-12.jpg": "9b34780e52e098c5af8d93ed2e7d5191",
"assets/assets/images/dummy/avatar-2.jpg": "8d832f19a264711a804b1f0ff599e0ae",
"assets/assets/images/dummy/avatar-3.jpg": "69bac73c4e3ccdf4e0c17a1d85e346b7",
"assets/assets/images/dummy/avatar-4.jpg": "c2490a01011a037c979e4c2ba890844d",
"assets/assets/images/dummy/avatar-5.jpg": "fb079bfd1100a06f36224bb642f28abf",
"assets/assets/images/dummy/avatar-6.jpg": "82c67e16a29e2b8fb371368a49c18a77",
"assets/assets/images/dummy/avatar-7.jpg": "e09a066d4230404dde5f4235ad5e2522",
"assets/assets/images/dummy/avatar-8.jpg": "da7ed22cc8df53bc0e43394b785d3a85",
"assets/assets/images/dummy/avatar-9.jpg": "f46a5378522a02b5c93224a26f3ebf82",
"assets/assets/images/dummy/brand-1.jpg": "b668a8988926ff7ba58edbd58a0fe82a",
"assets/assets/images/dummy/brand-2.jpg": "3c4be06089401865db62404f38678e4a",
"assets/assets/images/dummy/brand-3.jpg": "021e8cf94059d126ac7e1294eeaecb2e",
"assets/assets/images/dummy/brand-4.jpg": "ab199135ecaae8ba3751b74ce6eee9aa",
"assets/assets/images/dummy/brand-5.jpg": "94422a40ba64cff2d1a9ec6e36284de3",
"assets/assets/images/dummy/brand-6.jpg": "de47378db0e4cee59a4a6eb4431d3fca",
"assets/assets/images/dummy/brand-7.jpg": "73c975ef55b4a0d685c56566c2eb9ae1",
"assets/assets/images/dummy/brand-8.jpg": "f4d36095ace6fa8859f06af325519df0",
"assets/assets/images/dummy/coming_soon-1.jpg": "4e3b175cc997596bc6a7951816950723",
"assets/assets/images/dummy/error-1.jpg": "6e82611e1c9542ec1748ab69f65de79d",
"assets/assets/images/dummy/error-2.jpg": "2918fa609529406920d0e6f2aebe338a",
"assets/assets/images/dummy/error-3.jpg": "1d20736971db870a29b3a08aa93b8fa6",
"assets/assets/images/dummy/error-4.jpg": "df9bfa2ba07e0febdf96fa76d3037b5b",
"assets/assets/images/dummy/error-5.jpg": "7bf2b56327fea40fe71cdd0d7c5f1509",
"assets/assets/images/dummy/l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/dummy/l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/dummy/l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/dummy/l4.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/dummy/landing-1.jpg": "fa6ce9ede52e4e387f25f32020d91a73",
"assets/assets/images/dummy/landing-2.jpg": "3b220b249d317147546dcffdf246abf5",
"assets/assets/images/dummy/landing-3.jpg": "fc8e95902a411be297eff242d5f697b3",
"assets/assets/images/dummy/landing-4.jpg": "a9379304a6881589c10d4ab404ebace7",
"assets/assets/images/dummy/landing-5.jpg": "a5b445d62759790950864b6bac5d3b87",
"assets/assets/images/dummy/m-1.jpg": "839fb7b92dbfeb86be59c343bbd0393b",
"assets/assets/images/dummy/m-2.jpg": "d42e9822d8dae565c1704707ffa99705",
"assets/assets/images/dummy/m-3.jpg": "96de6cae58ae474870ef29f43e3a1245",
"assets/assets/images/dummy/maintenance-1.jpg": "695ee627e3201178f368d2a5fa78f483",
"assets/assets/images/dummy/p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/dummy/p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/dummy/p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/dummy/s-1.jpg": "2d5c08ee01e49d5e278de3a5b45581af",
"assets/assets/images/events.png": "854cc8217b75eaee7684a275b4ffe2c9",
"assets/assets/images/logo/ethereum-eth-logo.png": "3a3285881789dc8b524b6e5b42012460",
"assets/assets/images/logo/logo.svg": "ecd9ee5553fac996219ddb1e9b88a481",
"assets/assets/images/logo/logo_icon_dark.png": "144fd09dd735c2fdb60d49d9fe6f07c6",
"assets/assets/images/music/m1.jpg": "6bdedfb1acc9f02d9dbf713cf9910eb8",
"assets/assets/images/music/m10.jpg": "a67fc0a71653e4a244e8c953a36cc346",
"assets/assets/images/music/m11.jpg": "337d9d56f7c7e8a1aa336eda00ba1756",
"assets/assets/images/music/m12.jpg": "5d253ce5e5ae041953960ee30b65c15f",
"assets/assets/images/music/m13.jpg": "66f0265a96750cf8d316c3436077d432",
"assets/assets/images/music/m14.jpg": "090d09d5ba75d720351a7b1f915a7458",
"assets/assets/images/music/m2.jpg": "03139e6d8205c46271f7b5c10686057a",
"assets/assets/images/music/m3.jpg": "9f6245f385bc4ddb709caf77837ef198",
"assets/assets/images/music/m4.jpg": "b764af6942a2effcb1e25062f10990df",
"assets/assets/images/music/m5.jpg": "b5759914f7dd12bdb9354936dcdf6a6c",
"assets/assets/images/music/m6.jpg": "88714e4a8c25ba239733bdb02d20221a",
"assets/assets/images/music/m7.jpg": "85ef9bf589994cfc4323e513e0c91f95",
"assets/assets/images/music/m8.jpg": "b80a5581fac4f4175aa16bc1eaac313d",
"assets/assets/images/music/m9.jpg": "b81c98c5ec294291dcf1c9f819153cd5",
"assets/assets/images/music/music.jpg": "eb68a5f657cb4e4c0f2a845e9384554c",
"assets/assets/images/open_door.png": "2c54074c82110aee0e1c3eb910aaff50",
"assets/assets/images/rollcall.png": "da5fab4dd94188c83f16dfa1b7bf7543",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "30fe189880bde72f2e34b2bf51bd236f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "7f4eb68842f8fe4b7904ed581791c79d",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "1426f63dfc62a7bef7f2ad1bd583a1d5",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "a48f2c0b4c83dc927581a8aa644fb30b",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "e47582d957b2d32cd7c940e109808568",
"assets/FontManifest.json": "8e3e3eca141b46aaaf440e8eba17842f",
"assets/fonts/MaterialIcons-Regular.otf": "8f67f95a063b7e153f08aff98269fabc",
"assets/NOTICES": "322c4a258284183dba7cf3075cee96e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7c465988ad197dcf4ad748882b8215c4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3c9691e3af4cc421c84443ee793faad2",
"icons/192.png": "690aceb324ca83a80549de0f284a3926",
"icons/512.png": "4581efd74b77c7b0cd7f69b8d6033d61",
"img/splash.png": "ec9c163da1053f6b869874be6520ed05",
"index.html": "d2ca3873c54a3b2c65a2f9753e418e5c",
"/": "d2ca3873c54a3b2c65a2f9753e418e5c",
"main.dart.js": "143fa317d1b331ae48c9157589c66d73",
"manifest.json": "8f579b59218aed378b426084fed6559d",
"version.json": "268b091973f450d24a5f55da79c5ff2d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
