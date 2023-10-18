import { system } from '@minecraft/server';
import { LDB } from "../worldGen/ldb";

export class DatabaseTester {
    constructor() {
        this.DB = new LDB();
        this.dbid = 'testDataBase';
        this.testId = '';
    }

    debugSuccess(testId, dbid, note = '') {
        note = note ? ` ${note} §r:` : '';
        console.warn(`\n§3DataBase §r: §6${testId} §r: §e${dbid} §r:${note} §2Successfully Ran.`);
    }

    debugFail(testId, dbid, error, note = '') {
        note = note ? ` ${note} §r:` : '';
        console.warn(`\n§3DataBase §r: §6${testId} §r: §e${dbid} §r:${note} §4Failed To Run.\nERROR: §r${error}`);
    }

    runTests() {
        this.testNewDB();
        this.testShowDB();
        this.testAddToKey();
        this.testSetKeyPositive();
        this.testSetKeyNegative();
        this.testGetDB();
        this.testGetKeyValue();
        this.testGetKeys();
        this.testGetKeyFromAllKeys();
        this.testSetArray00();
        this.testSetArray01();
        this.testAppendArray();
        system.runTimeout(() => { this.testClears(); }, 120);
    }

    testNewDB() {
        this.testId = 'newDB';
        try {
            this.DB.newDB(this.dbid);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testShowDB() {
        this.testId = 'showDB';
        try {
            this.DB.showDB(this.dbid);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testAddToKey() {
        this.testId = 'addToKey';
        try {
            this.DB.addToKey(this.dbid, 'testKey00', 1);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testSetKeyPositive() {
        this.testId = 'setKey+';
        try {
            this.DB.setKey(this.dbid, 'testKey01', 2147483647);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testSetKeyNegative() {
        this.testId = 'setKey-';
        try {
            this.DB.setKey(this.dbid, 'testKey02', -2147483647);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testGetDB() {
        this.testId = 'getDB'
        try {
            let dbCheck = this.DB.getDB(this.dbid);
            if (dbCheck) this.debugSuccess(this.testId, this.dbid);
            else this.debugFail(this.testId, this.dbid, error);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testGetKeyValue() {
        this.testId = 'getKey'
        try {
            let keyCheck = this.DB.getKeyValue(this.dbid, 'testKey00');
            if (keyCheck) this.debugSuccess(this.testId, this.dbid, `testKey00: ${keyCheck}`);
            else this.debugFail(this.testId, this.dbid, error);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testGetKey() {
        this.testId = 'getKey'
        try {
            let keyCheck = this.DB.getKey(this.dbid, 'testKey00');
            if (keyCheck) this.debugSuccess(this.testId, this.dbid, JSON.stringify(keyCheck));
            else this.debugFail(this.testId, this.dbid, error);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testGetKeys() {
        this.testId = 'getKeys'
        try {
            let allKeys = this.DB.getAllKeys(this.dbid);
            this.debugSuccess(this.testId, this.dbid,`\n${JSON.stringify(allKeys, null, 2)}\n` );
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testGetKeyFromAllKeys() {
        this.testId = 'getKeyFromAllKeys'
        try {
            let allKeys = this.DB.getAllKeys(this.dbid);
            const key = allKeys.find(entry => entry.key === "testKey00");
            this.debugSuccess(this.testId, this.dbid,`\n${JSON.stringify(key)}\n` );
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testSetArray00() {
        this.testId = 'setArray00'
        try {
            const myArray00 = ["Red"];
            this.DB.setArray(this.dbid, "testArray00", myArray00);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testSetArray01() {
        this.testId = 'setArray01'
        try {
            const myArray01 = ["foo", "bar"];
            this.DB.setArray(this.dbid, "testArray01", myArray01);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testAppendArray() {
        this.testId = 'appendArray'
        try {
            const myArray03 = ["Red", "Blue"];
            this.DB.setArray(this.dbid, "testArray00", myArray03);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testClears() {
        this.testRemoveKey();
        this.testRemoveArray();
        this.testHideDB();
        this.testRemoveDB();
    }

    testRemoveKey() {
        this.testId = 'removeKey';
        try {
            this.DB.removeKey(this.dbid,'testKey00');
            this.DB.removeKey(this.dbid,'testKey01');
            this.DB.removeKey(this.dbid,'testKey02');
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testRemoveArray() {
        this.testId = 'removeArray';
        try {
            this.DB.removeArray(this.dbid,'testArray00');
            this.DB.removeArray(this.dbid,'testArray01');
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testHideDB() {
        this.testId = 'hideDB';
        try {
            this.DB.hideDB(this.dbid);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }

    testRemoveDB() {
        this.testId = 'removeDb';
        try {
            this.DB.removeDB(this.dbid);
            this.debugSuccess(this.testId, this.dbid);
        } catch (error) { this.debugFail(this.testId, this.dbid, error); }
    }
}

export function testDb() {
    const tester = new DatabaseTester();
    tester.runTests();
}
