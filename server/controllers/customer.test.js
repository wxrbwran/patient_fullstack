const customer = require("./customer")
// @ponicode
describe("customer.registerRoutes", () => {
    test("0", () => {
        let callFunction = () => {
            customer.registerRoutes({ get: () => "v4.0.0-rc.4" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            customer.registerRoutes({ get: () => "^5.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            customer.registerRoutes({ get: () => "v1.2.4" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            customer.registerRoutes({ get: () => "4.0.0-beta1\t" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            customer.registerRoutes({ get: () => "1.0.0" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            customer.registerRoutes(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("customer.home", () => {
    test("0", () => {
        let callFunction = () => {
            customer.home({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            customer.home({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            customer.home({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            customer.home({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            customer.home({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            customer.home(undefined, undefined, () => "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("customer.preferences", () => {
    test("0", () => {
        let callFunction = () => {
            customer.preferences({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            customer.preferences({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            customer.preferences({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            customer.preferences({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            customer.preferences({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            customer.preferences({ params: {} }, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("customer.orders", () => {
    test("0", () => {
        let callFunction = () => {
            customer.orders({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            customer.orders({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            customer.orders({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, { render: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            customer.orders({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            customer.orders({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { render: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            customer.orders(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("customer.ajaxUpdate", () => {
    test("0", () => {
        let callFunction = () => {
            customer.ajaxUpdate({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, { json: () => "\"[3,\"false\",false]\"" }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            customer.ajaxUpdate({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { json: () => "\"[3,\"false\",false]\"" }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            customer.ajaxUpdate({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            customer.ajaxUpdate({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            customer.ajaxUpdate({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            customer.ajaxUpdate(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
