package org.example.stage1.integr

class TestIntegration : TegralIntegrationTest() {
    override fun TegralEnvironmentDsl.initialize() {
        put(appModule)
    }

    @Test
    fun `Hello endpoint`() = test {
        val response = call("/greet")
    }
}
